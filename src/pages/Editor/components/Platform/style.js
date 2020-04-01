import styled from 'styled-components'

export const PlatformContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: 'row';
    width: 100%;
    height: 100vh; // calc(100vh - 70px);
    background-color: #F9F9F9;
    user-select: none;
`
export const PlatformPreview = styled.div`
    width: 650px;
    background: #FFFFFF;
    height: 80vh; // calc(100vh - 70px);
    margin: 0;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    overflow: auto;
`
export const PlatformTools = styled.div`
    width: 250px;
    margin: 0;
    background-color: #d7d7d7;
    border: 1px solid #cdcdcd;
    border-radius: 3px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh; // calc(100vh - 70px);
    > ul {
        padding: 0px;
        list-style: none;
        > li {
            list-style: none;
        }
    }
`
export const PlatformActive = styled.div`
    header, section, footer {
        border: ${ ({ active }) => { return active && '5px solid #fce308!important' }};
    }
`