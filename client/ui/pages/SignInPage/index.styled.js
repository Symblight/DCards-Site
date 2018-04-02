import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 30vw;
`;

export const WithBlock = styled.div`
    display: flex;
    padding-bottom: 24px;
    margin-top: 12px;
`;

export const SocialWrap = styled.div`
    margin-left: 10px;
    flex-grow: 1;

    &:first-child {
        margin-left: 0px;
    }
`;

export const QuestBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleBlock = styled.div`
    text-align: center;
`;