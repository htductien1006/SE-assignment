import React, { useState } from 'react';
import AVT from "../../assets/avatar.png";
import { makeStyles } from "@mui/styles";

const collectorInformation = [
    {
        Avatar: AVT,
        ID: "COL1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },
    {
        Avatar: AVT,
        ID: "COL1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },
    {
        Avatar: AVT,
        ID: "COL1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },
    {
        Avatar: AVT,
        ID: "COL1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },

];

const useStyles = makeStyles(() => ({
    header: {
        height: "1rem",
    },
    boxTitle: {
        position: "sticky",
        width: "100%",
        backgroundColor: "#378F28",
        color: "white",
        fontSize: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        position: "absolute",
        width: "90vw",
        height: "80vh",
        left: "5vw",
        top: "10vh",
        display: "grid",
        gridTemplateRows: "1fr 6fr",
        border: "2px solid black",
    },
    inforContainer: {
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        justifyContent: "center",
        display: "grid",
        gridTemplateRows: "auto",
        gridGap: "10px",
        overflowY: "scroll",
        overflowX: "hidden",
    },
    inforTitle: {
        display: "grid",
        gridTemplateColumns: "1.5fr 2fr 3fr 2fr 2fr",
        gridGap: "1rem",
        backgroundColor: "gray",
        borderBottom: "2px solid black",
        position: "sticky",
        top: 10,
        zIndex: 100,
    },
    inforData: {
        backgroundColor: "E9E8E8",
        fontSize: "20px",
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
    },
    infor: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 2.5fr 2.5fr 2fr 2fr",
        gridGap: "1rem",
        alignItems: "center",
        padding: "10px",
        zIndex: -1,
        "&.hover": {
            backgroundColor: "blue",
            cursor: "pointer",
        }
    },
    inforAva: {
        height: "150px",
    },
    inforID: {
        fontSize: "15px",
        fontWeight: "Regular",
        textAlign: "center",
    },
    inforName: {
        fontSize: "15px",
        fontWeight: "Regular",
        textAlign: "center",
    },
    inforPhone: {
        fontSize: "15px",
        fontWeight: "Regular",
        textAlign: "center",
    },
    inforEmail: {
        fontSize: "15px",
        fontWeight: "Regular",
        textAlign: "center",
    }
}))

export const CollectorList = () => {
    const styles = useStyles();
    const iTitle = ["Avatar", "ID", "Name", "Phone", "Email"];
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.container}>
                <div className={styles.boxTitle}>
                    COLLECTOR LIST
                </div>
                <div className={styles.inforContainer}>

                    <div className={styles.inforTitle}>
                        <div className={styles.inforData}>Avatar</div>
                        <div className={styles.inforData}>ID</div>
                        <div className={styles.inforData}>Name</div>
                        <div className={styles.inforData}>Phone</div>
                        <div className={styles.inforData}>Email</div>
                    </div>
                    {collectorInformation.map((item) => (
                        <div className={styles.infor}>
                            <img className={styles.inforAva} src={item.Avatar} alt="avatar"></img>
                            <div className={styles.inforID}>{item.ID}</div>
                            <div className={styles.inforName}>{item.Name}</div>
                            <div className={styles.inforPhone}>{item.Phone}</div>
                            <div className={styles.inforEmail}>{item.Email}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    );
}