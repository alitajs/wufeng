import { FC } from 'react';
import Dform, { useForm } from '@alitajs/dform';
import { Drop, Drag } from '@alitajs/dnd';

interface DynamicFormProps {}

const DynamicForm: FC<DynamicFormProps> = () => {
  const [form] = useForm();
  return (
    <Dform form={form}>
      <Drop
        onDrop={() => {
          console.log(12312312);
        }}
        onHover={() => {
          console.log(12312312);
        }}
        data={{ panel: 'dform' }}
        onOverStyle={{
          flex: 1,
          border: '1px dashed',
        }}
        canDropStyle={{
          flex: 1,
          border: '1px dashed',
        }}
        style={{
          flex: 1,
          border: 0,
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            height: '200px',
            background: 'yellow',
          }}
        ></div>
      </Drop>
    </Dform>
  );
};

export default DynamicForm;
