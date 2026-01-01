import { ImageResponse } from 'next/og';

// Обычно для Apple Touch Icon делают больше размер
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          textAlign: 'center',
          background: 'linear-gradient(to bottom, #434343, #000000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e6533c',
          borderRadius: '20%', // Apple любит скруглённые
          border: '8px solid #254f43',
          fontWeight: 'bold',
        }}
      >
        WB
      </div>
    ),
    {
      ...size,
    },
  );
}
