import { EquipmentList } from '@/entities/equipment/ui/equipment-list/equipment-list';

export const EquipmentSection = () => {
  return (
    <section className={'base_section'}>
      <div className="container">
        <div className="base_title">
          <h2>Какую технику мы ремонтируем</h2>
          <p>
            Наша миссия — обеспечить высококачественное обслуживание и ремонт
            спецтехники, минимизируя время простоя и увеличивая эффективность
            работы наших клиентов.
          </p>
        </div>

        <EquipmentList />
      </div>
    </section>
  );
};
