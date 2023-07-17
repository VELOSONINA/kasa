import React from 'react';

function Accordion(props) {
  const { isOpen, toggleAccordion, title } = props;

  return (
    <>
      <div
        onClick={toggleAccordion}
        className={`accordion-header ${isOpen ? 'open' : ''}`}
      >
        <div className='accordion-title-container'>
          <p className='accordion-title'>{title}</p>
          <span className='material-symbols-outlined'>
            {isOpen ? 'expand_less' : 'expand_more'}
          </span>
        </div>
      </div>
      {isOpen && <div className='accordion-content'>{props.children}</div>}
    </>
  );
}

export default Accordion;
