import React, { CSSProperties, Children, ReactNode, useEffect, useState } from 'react'

interface IWrapper {
    wrapperState:(state)=>void,
    children: ReactNode
}

export const Wrapper: React .FC<IWrapper> = ({wrapperState, children}) => {

    const [componentState, setcomponentState] = useState<string>('Loading State');

    const setCompState = (state) => {
        console.log("state ", state)
        setcomponentState(state)
        wrapperState(state)
      }
    
      useEffect(() => {
        console.log("comp state ", componentState)
      }, [componentState])

    const btnStyle: CSSProperties = {
        borderRadius:'9999px',
        backgroundColor: 'rgb(6 182 212/var(--tw-bg-opacity))',
        fontWeight:'600',
        fontSize: '.875rem',
        padding:'12px',
        border: '1px solid lightgrey'
      }

    const wrapperStyle:CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <div className='wrapper-container' style={wrapperStyle}>

            <div className='btn-container' style={{display:'flex', flexDirection:'row', gap:'12px'}}>
                <button className="rounded-full" style={btnStyle} onClick={()=>setCompState('Default State')}>Default State</button>
                <button className="rounded-full" style={btnStyle} onClick={()=>setCompState('Loading State')}>Loading State</button>
                <button className="rounded-full" style={btnStyle} onClick={()=>setCompState('Zero State')}>Zero State</button>
            </div>

            {children}

        </div>
    )
}
