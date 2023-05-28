import { Button } from 'antd';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
// @ts-ignore
import { FormattedMessage, useDispatch } from 'umi';
import Access from '@/components/Access';
import { TYPE_FORM } from '@/utils/utils.enum';

const CreateMovieStatus: React.FC = () => {
  const dispatch = useDispatch();
  const access = Access();

  const handleClick = () => {
    dispatch({ type: 'movieStatus/updateMovieStatusForm', payload: { type: TYPE_FORM.CREATE } });
  };

  return (
    <Button
      className={`${access.className([TYPE_FORM.CREATE])}`}
      type="primary"
      onClick={handleClick}
      icon={<PlusOutlined />}
    >
      <FormattedMessage id="pages.create" defaultMessage="Tạo mới" />
    </Button>
  );
};

export default CreateMovieStatus;
