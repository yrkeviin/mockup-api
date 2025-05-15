"use client";

import { useState, useState } from "react";
import axios from "axios";
import { Pagination, Modal, Card, Skeleton } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { getSessionsStorage, setSessionStorage } from "../../utils/sessionStorage";
import styles from "./Famosos.module.css";

const HEADERS = { "x-api-akey": process.env.NEXT_PUBLIC_API_KEY };

export default function Famosos() {
    const [data, setData] = useState({
        famosos: [],
        loading: true,
        current: 1,
        pageSize: 0,
    });

    const [modalInfo, setModalInfo] = useState({
        visible: false,
        title: "",
        description: "",
        famosos: null,
        avaliacao: null,
        loading: false,
    });

    useEffect(() => {
        const fetchFamosos = async () => {
            const cached = getSessionsStorage("famososData", []);
            if(cached.length > 0) {
                setData({
                    famosos: cached, loading: false, current: 1, pageSize: 5
                });
                return;
            }

            try {
                const { data: famosos } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/famosos`,
                    {
                        headers: HEADERS,
                    }
                );
                setSessionStorage("famososData", famosos);
                setData({
                    famosos,
                    loading: false,
                    current: 1,
                    pageSize: 5,
                });
            } catch {
                toast.error("Erro ao carregar alunos");
                setData((d) => ({...d, loading: false }));
            }
        };

        fetchFamosos();
    }, []);
}