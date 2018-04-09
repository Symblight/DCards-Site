import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 600px;
    padding: 12px;
    background-color: #c7c7c7;
    border-radius: 6px;
`;

export const WithBlock = styled.div`
    padding-bottom: 24px;
    margin-top: 12px;
    display: flex;
    justify-content: center;
`;

export const SocialWrap = styled.div`
    margin-left: 10px;

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