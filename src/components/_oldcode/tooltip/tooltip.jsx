import React, { useEffect, useState } from 'react';
import './tooltip.css';

function Tooltip() {
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0 });

	function handleMouseEnter(e) {
		const tooltipText = e.target.getAttribute('data-tooltip');
		if (tooltipText) {
			setTooltipText(tooltipText);
			setTooltipPos({ left: e.pageX, top: e.pageY });
		}
	};
	function handleMouseMove(e) {
		const left = e.clientX + 11;
		const top = e.clientY + 11;
		setTooltipPos({ left, top });
	};
	function handleMouseLeave(e) {
		setTooltipText('');
	};


  useEffect(() => {
    const elements = document.querySelectorAll('[data-tooltip]');
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
      tooltipText && <span className='tooltip' style={{  left: tooltipPos.left,top: tooltipPos.top}}>{tooltipText}</span>
  );
}

export default Tooltip;