import React from 'react'
import { useRoutes } from 'react-router-dom'
import {
    routesPublic,
} from './element/public'

export const AppRoutes = () => {
    const element = useRoutes(routesPublic);
    return element;
}