import React, { useRef, useEffect } from 'react';

function MyTooltip({ tooltipText }) {
  const triggerElement = useRef(null);

  useEffect(() => {
    $(triggerElement.current).tooltip('dispose');
    $(triggerElement.current).attr('title', tooltipText).tooltip();
  }, [tooltipText]);

  return (
    <button type="button" className="btn btn-primary" data-toggle="tooltip" title={tooltipText} ref={triggerElement}>
      Tooltip on top
    </button>
  );
}
