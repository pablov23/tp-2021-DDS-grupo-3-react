import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import i18next from 'i18next';
import cn from 'classnames';

import { ReactComponent as Tick } from '~assets/tick.svg';
import { ReactComponent as FileUpload } from '~assets/fileupload.svg';

import Button from '../Button';

import styles from './styles.module.scss';
import { FILES_ACCEPTED } from './constants';

function FileUploader({ handleFile, loading, className, buttonClassName, buttonTextClassName, customText }) {
  const hiddenFileInput = React.useRef(null);
  const [fileHasBeenUploaded, setFileHasBeenUploaded] = useState(false);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event?.target?.files[0];

    // TODO: Integration and change setFileHasBeenUploaded onSuccess
    setFileHasBeenUploaded(true);
    handleFile?.(fileUploaded);
  };
  return (
    <div className={cn(styles.container, className)}>
      <span className="section-title">{i18next.t('FileUploader:title')}</span>
      <div className={styles.buttonContainer}>
        {fileHasBeenUploaded ? (
          <div className={styles.successContainer}>
            <Tick className={styles.tick} />
            <span className={styles.successMessage}>Tu imagen se subio con exito!</span>
          </div>
        ) : (
          <Button
            className={cn(styles.uploadFilesButton, buttonClassName)}
            lowercase
            onClick={handleClick}
            loading={loading}>
            <span className={cn(styles.uploadFilesButtonText, buttonTextClassName)}>
              {customText || i18next.t('FileUploader:uploadFile')}
            </span>
            <FileUpload />
          </Button>
        )}
      </div>

      <input
        type="file"
        accept={FILES_ACCEPTED}
        ref={hiddenFileInput}
        onChange={handleChange}
        className={styles.fileInput}
      />
    </div>
  );
}

FileUploader.propTypes = {
  buttonClassName: string,
  buttonTextClassName: string,
  className: string,
  customText: string,
  handleFile: func,
  loading: bool
};

export default FileUploader;
