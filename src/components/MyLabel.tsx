import './mylabel.css';

export interface MyLabelProps {
  /**
   * Mensaje a mostrar en la etiqueta
   */
  label: string;

  /**
   * Tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Mayusculas
   */
  allCaps?: boolean;
  
  /**
   * Color del label
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Color personalizado
   */
  fontColor?: string;
}

export const MyLabel = ({ 
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor
 } : MyLabelProps ) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}} >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
