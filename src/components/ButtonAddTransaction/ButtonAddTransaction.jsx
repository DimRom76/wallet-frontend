import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import s from './buttonAddTransaction.module.scss';
import { operationsAction } from '../../redux/operations';

import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();
  const openModal = useCallback(
    () => dispatch(operationsAction.openModal()),
    [dispatch],
  );

  return (
    <div>
      <button
        className={s.button}
        type="button"
        name="addOperation"
        onClick={openModal}
      >
        <AddCircleIcon fontSize="large" className={s.buttonIcon} />
      </button>
    </div>
  );
}