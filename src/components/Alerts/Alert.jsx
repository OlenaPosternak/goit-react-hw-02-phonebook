import { Alert } from '@mui/material';

export const AlertInfo = () => {
  return (
    <>
      <Alert severity="info" onClose={() => {}}>
        'тут буде name' is already in contacts — <strong>check it out!</strong>
      </Alert>
    </>
  );
};
