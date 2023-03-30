import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PageRoutes } from "@utils";
import { PrivateWrapper, Layout} from "@components";
import { NotFound, Login, ProfilePage } from "@pages";
import { PersonalNewsFeed } from "../../pages/PersonalNewsFeed/PersonalNewsFeed";
export const Router: FC = () => {
  const isAuthorized = true;
  return (
    <BrowserRouter>
      <Routes>
        {isAuthorized && <Route path={PageRoutes.LOGIN} element={<Login />} />}
        <Route path={PageRoutes.LAYOUT} element={<Layout />}>
          <Route element={<PrivateWrapper roles={["user", "admin_events"]} />}>
            <Route path={PageRoutes.SHARED_FEED} element={<p> Feed общий</p>} />
            <Route path={PageRoutes.USERS_FEED} element={<PersonalNewsFeed />} />

            <Route path={PageRoutes.SHOP} element={<p> Магазин </p>} />
            <Route path={PageRoutes.PROFILE} element={<ProfilePage/>} />
            <Route
              path={PageRoutes.SHOP_PRODUCT}
              element={<p> Страница товара по id, передаем в запросе </p>}
            />
            <Route path={PageRoutes.FAVOURITES} element={<p> Избранное </p>} />
            <Route path={PageRoutes.SHOPPING_CART} element={<p> Корзина </p>} />
            <Route path={PageRoutes.THANKS} element={<p> Благодарности </p>} />
            <Route path={PageRoutes.EVENT} element={<p> Событие </p>} />
          </Route>
          <Route element={<PrivateWrapper roles={["admin_events"]} />}>
            <Route path={PageRoutes.CREATE_EVENT} element={<p> Создать событие </p>} />
          </Route>
          <Route element={<PrivateWrapper roles={["admin_sys"]} />}>
            <Route path={PageRoutes.SUBMIT_EVENT} element={<p> Подтвердить событие </p>} />
          </Route>
          <Route element={<PrivateWrapper roles={["organizer"]} />}>
            <Route path={PageRoutes.PUBLISH_EVENT} element={<p> Опубликовать событие </p>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;