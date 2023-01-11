import TodayPlan from './TodaysPlan';

function TodayPlanApp(props) {
  const { onButtonClick, hasplan } = props;
  return (
    <div className="body">
      {hasplan ? <TodayPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}
