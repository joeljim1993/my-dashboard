import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition:true,
        onViewTransitionCreated(transitionInfo) {
          // console.log("transitionInfo",transitionInfo);

        },
      }),
    ),
    importProvidersFrom(
      HttpClientModule
    )


  ]
};
