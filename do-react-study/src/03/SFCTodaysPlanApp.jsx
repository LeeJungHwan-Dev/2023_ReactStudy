import TodayPlan from './TodaysPlan';

function TodayPlanApp(props) {
  const { onButtonClick, hasplan } = props;
  return (
    <div className="body">
      {hasplan ? <TodayPlan /> : null}
      <button onClick={onButtonClick}>ęłíěě</button>
    </div>
  );
}
