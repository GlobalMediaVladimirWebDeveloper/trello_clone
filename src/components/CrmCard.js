import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CrmCard = () => {

    return(
        <div class="crm-card" style={styles.crmCardRoot}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );

}


const styles = {

    crmCardRoot: {

    }

}



export default CrmCard;