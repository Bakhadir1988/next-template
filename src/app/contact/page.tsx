import React from 'react';

import { equipmentTabs } from '@/features/universalTabs/lib/equipmentData';
import { UniversalTabs } from '@/features/universalTabs/ui/UniversalTabs/UniversalTabs';
import { EquipmentSection } from '@/widgets/equipment-section/equipment-section';

const Contact = () => {
  return (
    <>
      <EquipmentSection />
      <div className="container">
        <UniversalTabs tabs={equipmentTabs} orientation="vertical" />
      </div>
    </>
  );
};

export default Contact;
