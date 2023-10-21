import React from 'react';
import './features.css';
import FeatureCard from './featurecards/FeatureCard';

const Features = () => {
  return (
    <>
        <div className="features">
            <br/>
            <hr/>
            <br/>
            <h1 className='featuresHeading'>Features</h1>
            <br/>
        
            { /* time to add some feature cards here */}
            { /* Feature Rows and columns */}
            <div className="featuresRow">
                
                <FeatureCard featureName="MyFeature" featureImage="https://img.freepik.com/free-photo/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop_574295-563.jpg?w=826&t=st=1697122524~exp=1697123124~hmac=bbfb0e34b2a96eb12ee81b86fadd1a491e9ef431cc852e3c5d8214ab6f74c614" featureDescription="Pariatur mollit enim eiusmod ex excepteur Lorem deserunt veniam. Et amet sunt nisi labore et. Adipisicing anim elit officia tempor. Officia et culpa veniam nisi. Velit occaecat ullamco non ullamco. Amet eiusmod voluptate esse irure sit excepteur dolore."/>
                <FeatureCard featureName="MyFeature" featureImage="https://img.freepik.com/free-photo/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop_574295-563.jpg?w=826&t=st=1697122524~exp=1697123124~hmac=bbfb0e34b2a96eb12ee81b86fadd1a491e9ef431cc852e3c5d8214ab6f74c614" featureDescription="Pariatur mollit enim eiusmod ex excepteur Lorem deserunt veniam. Et amet sunt nisi labore et. Adipisicing anim elit officia tempor. Officia et culpa veniam nisi. Velit occaecat ullamco non ullamco. Amet eiusmod voluptate esse irure sit excepteur dolore."/>
            
            </div>

            <div className="featuresRow">
                
                <FeatureCard featureName="MyFeature" featureImage="https://img.freepik.com/free-photo/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop_574295-563.jpg?w=826&t=st=1697122524~exp=1697123124~hmac=bbfb0e34b2a96eb12ee81b86fadd1a491e9ef431cc852e3c5d8214ab6f74c614" featureDescription="Pariatur mollit enim eiusmod ex excepteur Lorem deserunt veniam. Et amet sunt nisi labore et. Adipisicing anim elit officia tempor. Officia et culpa veniam nisi. Velit occaecat ullamco non ullamco. Amet eiusmod voluptate esse irure sit excepteur dolore."/>
                <FeatureCard featureName="MyFeature" featureImage="https://img.freepik.com/free-photo/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop_574295-563.jpg?w=826&t=st=1697122524~exp=1697123124~hmac=bbfb0e34b2a96eb12ee81b86fadd1a491e9ef431cc852e3c5d8214ab6f74c614" featureDescription="Pariatur mollit enim eiusmod ex excepteur Lorem deserunt veniam. Et amet sunt nisi labore et. Adipisicing anim elit officia tempor. Officia et culpa veniam nisi. Velit occaecat ullamco non ullamco. Amet eiusmod voluptate esse irure sit excepteur dolore."/>
            
            </div>
            <br/><br/><br/>
        </div>
    </>
  )
}

export default Features;
