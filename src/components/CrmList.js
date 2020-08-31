import React from "react";
import CrmCard from "./CrmCard";


const CrmList = ({title}) => {

    return(
        <div class="crm-list" style={styles.crmListRoot}>
            <h3>{title}</h3>
            <CrmCard />
        </div>
    );
                                    
}


const styles = {

    crmListRoot:{
        backgroundColor:"#ccc",
        borderRadius: 5,
        width: 275,
        height:"auto",
        minHeight: 100,
        flex: "0 0 auto",
        padding:8,
        margin:4,
        position: "relative",
        
    }

};


export default CrmList;




