import React, { useState } from 'react';
import AVT from "../../assets/avatar.png";
import Table from 'react-bootstrap/Table';
import { makeStyles } from "@mui/styles";
import "./index.css"

const janitorInformation = [
    {
        Avatar: AVT,
        ID: "JAN1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },
    {
        Avatar: AVT,
        ID: "JAN1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },
    {
        Avatar: AVT,
        ID: "JAN1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },
    {
        Avatar: AVT,
        ID: "JAN1234",
        Name: "Nguyễn Xuân Mạnh",
        Phone: "0123456789",
        Email: "mailexample1@gmail.com"
    },

];



export const JanitorList = () => {
    return (
        <>
            <div className="header"></div>
            <div className="container">
                <div className="boxTitle">
                    JANITOR LIST
                </div>
                <div className="inforContainer">
                    <Table className="table" striped bordered hover>
                        <thead className="thead">
                            <tr>
                                <th>Avatar</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {janitorInformation.map((item) => (
                            <tbody className="tbody">

                                <tr className="tr" onMouseOver={{ backgroundColor: "aqua" }}>
                                    <th><img height="150px" width="120px" src={item.Avatar} alt="avatar"></img></th>
                                    <th style={{ fontWeight: "500" }}>{item.ID}</th>
                                    <th style={{ fontWeight: "500" }}>{item.Name}</th>
                                    <th style={{ fontWeight: "500" }}>{item.Phone}</th>
                                    <th style={{ fontWeight: "500" }}>{item.Email}</th>
                                </tr>

                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </>
    );

}