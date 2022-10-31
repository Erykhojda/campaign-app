import React from "react";
import YourCampaign from "./YourCampaign";
import classes from "./Form.module.css";
import Form from "./Form";

const CampaignBuilder = () => {
	return (
		<>
			<section className={classes.campaign}>
				<Form />
			</section>

			<YourCampaign />
		</>
	);
};

export default CampaignBuilder;
