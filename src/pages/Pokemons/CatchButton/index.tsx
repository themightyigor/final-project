import * as React from 'react';
import { Button } from 'antd';
import { useCaughtPokemons } from '../../../store/caught/hooks';

type CatchButtonProps = {
  id: number;
};

export const CatchButton: React.FC<CatchButtonProps> = ({ id }) => {
  const { capture, isAdded } = useCaughtPokemons(id);

  return (
    <Button disabled={isAdded} onClick={() => capture(id)}>
      Catch
    </Button>
  );
};
