import NotificationService from './NotificationService';

class ExceptionHandler {
  public static catchRejection(e: Error) {
    // eslint-disable-next-line no-console
    console.warn(
      '%cException handled',
      'color: yellow; font-style: italic; background-color: blue; padding: 2px;',
      e
    );

    NotificationService.showError(e.message);
  }

  public static catchError(e: Error, ...otherArgs: any[]) {
    // eslint-disable-next-line no-console
    console.warn(
      '%cError',
      'color: green; font-style: italic; background-color: blue; padding: 2px;',
      e,
      otherArgs
    );
  }
}

export default ExceptionHandler;
