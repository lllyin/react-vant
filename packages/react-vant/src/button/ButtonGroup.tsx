import React, { FC, useContext } from 'react';
import clsx from 'clsx';
import { ButtonGroupProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import ButtonContext from './ButtonContext';
import { SHADOW } from '../utils/constant';

export const ButtonGroup: FC<ButtonGroupProps> = ({ className, style, children, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('button-group', prefixCls);

  return (
    <div
      style={style}
      className={clsx(
        className,
        bem([
          props.type,
          {
            round: props.round,
            plain: props.plain,
          },
        ]),
        props.shadow && `${SHADOW}--${+props.shadow}`,
      )}
    >
      <ButtonContext.Provider value={{ parent: props }}>{children}</ButtonContext.Provider>
    </div>
  );
};

export default ButtonGroup;
