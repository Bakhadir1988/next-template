import React from 'react';

import { AccordionDto } from '../model/types';
import { AccordionList } from './accordion-list/accordion-list';

export const Accordion = ({ data }: { data: AccordionDto }) => {
  const { title, content, linked_sections } = data;

  return (
    <section className={'base_section'}>
      <div className="container">
        <div className="base_title">
          <h2>{title}</h2>
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </div>

        <AccordionList data={linked_sections} />
      </div>
    </section>
  );
};
