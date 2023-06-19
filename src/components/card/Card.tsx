import React from 'react';
export type ICardProps = {
  style?: React.CSSProperties;
  children?: React.ReactElement;
  width?: string;
  height?: string;
  mounted?: (event: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export const Card = ({ style, width = '274px', height = '175px', children, mounted, ...props }: ICardProps) => {
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (mounted) {
      mounted(true);
    }
    return () => {
      setMounted(false);
      if (mounted) {
        mounted(false);
      }
    };
  }, []);


  return (
    <div  {...props} className={"max-w-sm rounded overflow-hidden shadow-sm bg-white"} style={{ ...style, width, height, fontSize:'10px' }}>
      {children}
      <h1 className={"container"}>test</h1>
    </div>
  );
};
