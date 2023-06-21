import React, { CSSProperties, useEffect, useState } from 'react';
import { IPEProfile, LiveTable } from '../live-table';
import { PepComponentLoader } from './PepComponentLoader';
/* import dialogService from 'app/shared/services/dialogService';
import { GeneralModal } from 'app/shared/modal/GeneralModal'; */

interface PepComponentProps {
  onTableClicked: (pedid:any)=> void
  stateToRender?: string | null;
}

export const PepComponent: React.FC<PepComponentProps> = ({ stateToRender, onTableClicked }) => {
  const [data, setData] = useState<IPEProfile[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const jsonData = await response.json();
        setData(jsonData.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const pepContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '506px',
    width: '1112px',
    borderRadius: '0px',
    backgroundColor: '#FFFFFF',
  };

  const noPep: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  };

  const pepHeaderContainer: CSSProperties = {
    margin: '32px 0px',
  };

  const checkMarker: CSSProperties = {
    width: '30px',
    height: '30px',
    color: '#03D98A',
  };

  const lastUpdate: CSSProperties = {
    fontSize: '14px',
    fontFamily: 'Inter',
    color: 'rgb(181, 180, 187)',
    fontWeight: '500',
  };

  const lastUpdateSection: CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  };

  const btnStyle: CSSProperties = {
    borderRadius:'9999px',
    backgroundColor: 'rgb(6 182 212/var(--tw-bg-opacity))',
    fontWeight:'600',
    fontSize: '.875rem',
    padding:'12px',
    border: '1px solid lightgrey'
  }

  // loader

  const columnHeader: string[] = ['Name', 'Email', 'Address', 'Website', 'Company'];
  

  /* const onTableClicked = (emitteddata:any) => {
    console.log('emitted data from table', emitteddata);
    dialogService.openDialog(GeneralModal, emitteddata);
  }; */

  return (
    <div className="pep-container" style={pepContainer}>

      {stateToRender === 'Default State' && (
        <>
          <div className={"my-8"}>
            <h1 className={'text-[24px] font-inter font-extrabold'}>PEP Profile</h1>
          </div>
          <div className="component-to-render" style={{ height: '353px', overflow: 'hidden' }}>
            <LiveTable columnHeader={columnHeader} data={data} onClickItem={onTableClicked} />
          </div>
        </>
      )}

      {/* if no pep data */}

      {stateToRender === 'Zero State' && (
        <>
          <div className="no-pep" style={noPep}>
            <div className={"my-8"}>
              <h1 className={'text-[24px] font-inter font-extrabold'}>PEP Profile</h1>
            </div>
            <div className="check-mark" style={{ display: 'flex', gap: '12px', justifyContent: 'center', margin: '32px 0px' }}>
              <svg
                style={checkMarker}
                xmlns="http://www.w3.org/2000/svg"
                fontWeight="900"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span style={{ color: '#B5B4BB', fontWeight: '500', fontSize: '18px', fontFamily: 'inter' }}>NO PEP</span>
            </div>
            <div className="last-update" style={{ ...lastUpdateSection, margin: '32px 0px' }}>
              <span className="date-update" style={lastUpdate}>
                Last Update: {'05 May 2022'}
              </span>
            </div>
          </div>
        </>
      )}

      {/* loading state */}

      {stateToRender === 'Loading State' && (
        <>
          <div className="loading-state-container">
            <div className="header-title">
              {/* loader here */}
              <PepComponentLoader />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
