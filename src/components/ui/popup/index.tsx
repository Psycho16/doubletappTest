import React, { FC } from 'react'

import { useRootStore } from '@hooks/common/useStore'

import * as SC from './styled'


export interface PopupProps {
    items: string[];
    placeholder?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    type?: string;
}

const PopupComponent: FC<PopupProps> = (props) => {
    const {
        items,
        icon,
        type,
        placeholder
    } = props

    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
    const [activeLabel, setActiveLabel] = React.useState<string>(placeholder || items[0])
    const {StudentsStore} = useRootStore()
    
    const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
    }
    const changeActiveLabel = (index: number) =>{
        toggleVisiblePopup()
        setActiveLabel(items[index])
        if (type === "sort") {
            StudentsStore.setSortType(items[index])    
        }
    }
    
    return (
        <SC.Base>
            <SC.PopupWrapper>
                <SC.PopupLabel onClick={toggleVisiblePopup}>
                    {(type === "withPlaceholder") ?
                    <SC.PlaceholderSpan title={activeLabel}>{activeLabel}</SC.PlaceholderSpan> 
                    : 
                    <SC.PopupSpan >{activeLabel}</SC.PopupSpan>}
                    
                    {icon && <SC.Icon>{React.createElement(icon)}</SC.Icon>}
                </SC.PopupLabel>

                {visiblePopup ? (
                <SC.Popup>
                     <SC.PopupUl>
                        {items ? 
                        items.map((item: string, index: number) =>
                            <SC.PopupLi
                            title={item} 
                            key={item} 
                            onClick={() => 
                                changeActiveLabel(index)
                            }
                            >
                            {item}
                            </SC.PopupLi>) 
                            : ''}
                    </SC.PopupUl>
                </SC.Popup>
                ) : '' }
            </SC.PopupWrapper>
            
        </SC.Base>
    )
}

export default PopupComponent

