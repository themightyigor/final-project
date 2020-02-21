import React from 'react';
import { Button } from 'antd';
import { useCaughtPokemons } from '../../../store/caught/hooks';

type CatchButtonProps = {
  id: number;
};

export const CatchButton: React.FC<CatchButtonProps> = ({ id }) => {
  const { capture, isCaught } = useCaughtPokemons(id);

  return (
    <Button disabled={isCaught} onClick={() => capture(id)}>
      Catch
    </Button>
  );
};
