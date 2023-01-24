import Chip from "@components/atoms/Chip";
import Icon from "@components/atoms/Icon";
import Tooltip from "@components/atoms/Tooltip";

const TrendChip = (props) => {
  const { value, ...rest } = props;

  return (
    <Tooltip title="Jämfört med föregående period" arrow {...rest}>
      <Chip
        label={`${value > 0 ? "+" : ""}${value}%`}
        color={value > 0 ? "error" : "success"}
        variant="outlined"
        size="small"
        icon={
          <Icon
            name={value > 0 ? "TrendingUpTwoTone" : "TrendingDownTwoTone"}
          />
        }
        sx={{
          bgcolor: value > 0 ? "transparent.error" : "transparent.success",
        }}
      />
    </Tooltip>
  );
};

export default TrendChip;
