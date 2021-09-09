import styled from 'styled-components';

const StatisticsWrapper = styled.div`
  .statistics_list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 700;
  }
  .statistics_item {
    display: flex;
    color: grey;
    &:nth-child(1) {
      color: #28a18b;
    }
    :nth-child(3) {
      color: #f58376;
    }
  }
  .statistics_text {
    margin-right: 5px;
  }
  .statistics_quantity {
    font-style: italic;
    color: #3563ea;
  }
  .statistics_total {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #77586c;
  }
  .statistics_percentage {
    font-size: 24px;
    font-weight: 700;
    color: #77586c;
  }
`;
export default StatisticsWrapper;