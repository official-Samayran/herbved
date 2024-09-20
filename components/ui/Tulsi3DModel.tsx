import React from 'react';

const Tulsi3DModel: React.FC = () => {
  return (
      <div className="sketchfab-embed-wrapper">
      <iframe
        title="Tulsi Tree on a cement tub"
        frameBorder="0"
        allowFullScreen
       // mozallowfullscreen="true"
        //webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/29e20a3ac415461fa12930d04282163c/embed"
      />
      <p style={{
        fontSize: '13px',
        fontWeight: 'normal',
        margin: '5px',
        color: '#4A4A4A'
      }}>
        <a
          href="https://sketchfab.com/3d-models/tulsi-tree-on-a-cement-tub-29e20a3ac415461fa12930d04282163c?utm_medium=embed&utm_campaign=share-popup&utm_content=29e20a3ac415461fa12930d04282163c"
          target="_blank"
          rel="nofollow noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Tulsi Tree on a cement tub
        </a> by <a
          href="https://sketchfab.com/Prakash.Chatterjee?utm_medium=embed&utm_campaign=share-popup&utm_content=29e20a3ac415461fa12930d04282163c"
          target="_blank"
          rel="nofollow noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Prakash.Chatterjee
        </a> on <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=29e20a3ac415461fa12930d04282163c"
          target="_blank"
          rel="nofollow noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default Tulsi3DModel;
