'use client';
import { Suspense, useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export default function SplineGlobe({
  isVisible = true,
}: {
  isVisible?: boolean;
}) {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [isSplineReady, setIsSplineReady] = useState(false);
  const splineRef = useRef<any>(null);

  // Тайм-аут бездействия: 1 минута.
  // Если пользователь не активен это время, сцена выгружается для экономии ресурсов.
  const IDLE_TIMEOUT = 1 * 60 * 1000;

  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const ignoreWakeupUntilRef = useRef<number>(0);

  useEffect(() => {
    // Задержка загрузки Spline для оптимизации LCP (Largest Contentful Paint).
    // Позволяет сначала загрузить основной контент страницы, а тяжелую 3D сцену — чуть позже.
    const timer = setTimeout(() => {
      setShouldLoadSpline(true);
    }, 1000); // 1.0сек задержка после монтирования

    return () => clearTimeout(timer);
  }, []);

  // Строгий контроль видимости: Если компонент скрыт пропсом isVisible,
  // мы сбрасываем состояние готовности.
  useEffect(() => {
    if (!isVisible) {
      setIsSplineReady(false);
    }
  }, [isVisible]);

  const handleOnLoad = (splineApp: any) => {
    splineRef.current = splineApp;
    setIsSplineReady(true);
  };

  // Логика отслеживания бездействия пользователя
  useEffect(() => {
    if (!shouldLoadSpline) return;

    const onActivity = () => {
      // Если мы сейчас в режиме "бездействия", проверяем "льготный период" (grace period).
      // Это защита от ложных срабатываний: когда Spline исчезает, макет может сдвинуться,
      // вызывая событие mousemove, которое ошибочно разбудило бы сцену обратно.
      if (isIdle) {
        if (Date.now() < ignoreWakeupUntilRef.current) {
          return; // Игнорируем события в период блокировки
        }
        setIsIdle(false); // Пользователь вернулся, просыпаемся
      }

      // Сбрасываем таймер при любой активности
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      // Устанавливаем таймер на 1 минуту
      idleTimerRef.current = setTimeout(() => {
        setIsIdle(true);
        // Устанавливаем "льготный период" (1 секунда) после ухода в сон,
        // в течение которого мы игнорируем ВСЕ события ввода.
        ignoreWakeupUntilRef.current = Date.now() + 1000;
      }, IDLE_TIMEOUT);
    };

    // Запускаем таймер при инициализации
    onActivity();

    // Оптимизированный обработчик событий (Throttling).
    // Функция проверки активности будет вызываться не чаще 2 раз в секунду,
    // даже если событий (например, движения мыши) сотни в секунду.
    let lastCall = 0;
    const throttledHandler = () => {
      const now = Date.now();
      if (now - lastCall > 500) {
        lastCall = now;
        onActivity();
      }
    };

    const events = [
      'mousemove',
      'mousedown',
      'keydown',
      'touchstart',
      'scroll',
      'wheel',
    ];

    // Вешаем слушатели на окно (window), чтобы ловить активность в любом месте сайта.
    // passive: true улучшает производительность скролла.
    events.forEach((event) =>
      window.addEventListener(event, throttledHandler, {
        capture: true,
        passive: true,
      }),
    );

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      events.forEach((event) =>
        window.removeEventListener(event, throttledHandler, { capture: true }),
      );
    };
  }, [shouldLoadSpline, isIdle]);

  // Определяем, нужно ли рендерить сцену Spline.
  // Она должна быть: разрешена к загрузке (shouldLoadSpline) И видима (isVisible) И НЕ в режиме простоя (!isIdle).
  const showSpline = shouldLoadSpline && isVisible && !isIdle;

  // Определяем, нужно ли показывать картинку-заглушку.
  // Показываем если: Spline не должен отображаться ИЛИ он еще не загрузился полностью.
  const showPlaceholder = !showSpline || !isSplineReady;

  return (
    <div
      className="w-full h-full relative"
      style={{
        maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
      }}
    >
      {/* Заглушка для Мобильных устройств */}
      <div
        className={`absolute right-[40%] top-[50px] w-[360px] h-[813px] transition-opacity duration-1000 md:hidden ${
          !showPlaceholder ? 'opacity-0 pointer-events-none' : 'opacity-100' // Видна, пока Spline не готов или спит
        }`}
      >
        <Image
          src="/mobile-globus.webp"
          alt="Globe placeholder"
          width={360}
          height={813}
          quality={80}
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Заглушка для Десктопа */}
      <div
        className={`absolute inset-0 top-[40px] w-full h-full transition-opacity duration-1000 hidden md:flex items-center justify-center ${
          !showPlaceholder ? 'opacity-0 pointer-events-none' : 'opacity-100' // Видна, пока Spline не готов или спит
        }`}
      >
        <div className="relative w-[83%] h-[83%]">
          <Image
            src="/desktop-globus.webp"
            alt="Globe placeholder desktop"
            fill
            quality={80}
            fetchPriority="high"
            className="object-contain object-center"
          />
        </div>
      </div>

      {showSpline && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            isSplineReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
            <Spline
              scene="https://prod.spline.design/S6FngPEV2SNfSBPp/scene.splinecode"
              onLoad={handleOnLoad}
            />
          </Suspense>
        </div>
      )}

      {/* Затемнение (Watermark Cover) в углу, на всякий случай */}
      <div className="absolute bottom-[16px] right-[16px] w-[140px] h-[36px] bg-[#0c0c0c] z-50 pointer-events-none" />
    </div>
  );
}
