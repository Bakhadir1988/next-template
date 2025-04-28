'use client';

import { useState } from 'react';

import { equipmentData } from '../../model/data';
import { EquipmentCard } from '../equipment-card/equipment-card';
import styles from './equipment-list.module.css';

export const EquipmentList = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.accordion}>
      {equipmentData.map((equipment) => (
        <EquipmentCard
          equipment={equipment}
          key={equipment.id}
          isActive={activeId === equipment.id}
          onClick={() => handleToggle(equipment.id)}
        />
      ))}
    </div>
  );
};
