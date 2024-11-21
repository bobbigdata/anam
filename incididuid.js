import React, { useRef } from 'react';
import Hammer from 'hammerjs';

const GestureArea = () => {
    const gestureAreaRef = useRef(null);

    React.useEffect(() => {
        const hammer = new Hammer(gestureAreaRef.current);
        hammer.on('swipeleft swiperight swipeup swipedown', (event) => {
            switch(event.type) {
                case 'swipeleft':
                    console.log('Swiped left');
                    break;
                case 'swiperight':
                    console.log('Swiped right');
                    break;
                case 'swipeup':
                    console.log('Swiped up');
                    break;
                case 'swipedown':
                    console.log('Swiped down');
                    break;
            }
        });

        return () => {
            hammer.off('swipeleft swiperight swipeup swipedown');
        };
    }, []);

    return (
        <div id="gestureArea" ref={gestureAreaRef} style={{ width: '300px', height: '300px', backgroundColor: 'lightgray', textAlign: 'center', lineHeight: '300px', border: '1px solid black' }}>
            Gesture Area
        </div>
    );
};

export default GestureArea;
