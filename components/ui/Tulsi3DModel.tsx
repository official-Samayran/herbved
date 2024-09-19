import React from 'react';

const Tulsi3DModel: React.FC = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ margin: '20px auto', textAlign: 'center' }}>
      <iframe
        title="Tulsi"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        //mozallowfullscreen="true"
       // webkitallowfullscreen="true"
        allowFullScreen
        src="https://sketchfab.com/models/cddfc19d150c454fb77dd52812bbb6aa/embed"
        width="640"
        height="480"
        style={{ maxWidth: '100%' }} // Responsive for mobile
      />
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a href="https://sketchfab.com/3d-models/tulsi-cddfc19d150c454fb77dd52812bbb6aa?utm_medium=embed&utm_campaign=share-popup&utm_content=cddfc19d150c454fb77dd52812bbb6aa"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Tulsi
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/verlekarshaunak?utm_medium=embed&utm_campaign=share-popup&utm_content=cddfc19d150c454fb77dd52812bbb6aa"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          ShonkV
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=cddfc19d150c454fb77dd52812bbb6aa"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default Tulsi3DModel;
