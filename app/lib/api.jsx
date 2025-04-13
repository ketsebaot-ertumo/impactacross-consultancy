"use client";
import axios from 'axios';

const API = axios.create({
    baseURL: '/lib/proxy?path=',
});

export default API;
