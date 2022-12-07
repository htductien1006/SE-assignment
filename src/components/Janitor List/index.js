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
                    <Table className="table">
                        <thead className="thead">
                            <tr>
                                <th>Avatar</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {janitorInformation.map((item) => (
                                <tr>
                                    <th><img width="150px" src={item.Avatar} alt="avatar"></img></th>
                                    <th>{item.ID}</th>
                                    <th>{item.Name}</th>
                                    <th>{item.Phone}</th>
                                    <th>{item.Email}</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );

}