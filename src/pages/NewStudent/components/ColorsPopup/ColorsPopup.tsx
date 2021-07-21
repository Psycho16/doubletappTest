import React, { FC } from 'react'

import {useOutsideClick} from '@hooks/common/useOutsideClick'

import * as SC from './styled'


type ColorsPopupProps = {
  items: string[]
  placeholder: string
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
const ColorsPopup: FC<ColorsPopupProps> = (props) => {
  const {
    items,
    placeholder,
    icon
  } = props

  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
  const [activeLabel, setActiveLabel] = React.useState<string>(placeholder)

  
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }
  const colorsArray = ["Голубой", "Красный","Зеленый","Желтый","Черный","Оранжевый","Радужный"]
  const changeActiveLabel = (index: number) =>{
      toggleVisiblePopup()
      setActiveLabel(items[index])
  }
  const popupRef = React.useRef(null)

    useOutsideClick(popupRef, () => {
        setVisiblePopup(false)
    })


  return (
    <SC.Base>
    <SC.ColorsPopupWrapper>
        <SC.ColorsPopupLabel onClick={toggleVisiblePopup} ref={popupRef}>
            <SC.ColorsPopupSpan >{
            (activeLabel === placeholder) ?
            placeholder
            :
            colorsArray[items.indexOf(activeLabel)]
            }</SC.ColorsPopupSpan>
            <SC.StudentColor 
                    style={{ background: activeLabel }}
                    />
            {icon && <SC.Icon>{React.createElement(icon)}</SC.Icon>}
        </SC.ColorsPopupLabel>

        {visiblePopup ? (
        <SC.ColorsPopup>
            <SC.ColorsPopupUl>
                {items ? 
                items.map((item: string, index: number) =>
                    <SC.StudentColor 
                    key={item} 
                    style={{ background: item }}
                    onClick={() => 
                        changeActiveLabel(index)
                    } />) 
                    : ''}
            </SC.ColorsPopupUl>
        </SC.ColorsPopup>
        ) : '' }
    </SC.ColorsPopupWrapper>
    
</SC.Base>
  )
}

export default ColorsPopup
