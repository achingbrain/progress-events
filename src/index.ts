/**
 * Progress events are emitted during long running operations
 */
export interface ProgressEvent<T extends string = any, D = unknown> {
  /**
   * The event type
   */
  type: T

  /**
   * Context-specific event information
   */
  detail: D
}

/**
 * An implementation of the ProgressEvent interface, this is essentially
 * a typed `CustomEvent` with a `type` property that lets us disambiguate
 * events passed to `progress` callbacks.
 */
export class CustomProgressEvent<D = unknown, T extends string = any> extends Event implements ProgressEvent<T, D> {
  public type: T
  public detail: D

  constructor (type: T, detail?: D) {
    super(type)

    this.type = type
    // @ts-expect-error detail may be undefined
    this.detail = detail
  }
}

/**
 * Define an `onProgress` callback that can be invoked with `ProgressEvent`s
 *
 * @example
 *
 * ```typescript
 * type MyOperationProgressEvents =
 *   ProgressEvent<'operation:start'> |
 *   ProgressEvent<'operation:success', Result> |
 *   ProgressEvent<'operation:error', Error>
 *
 * export interface MyOperationOptions extends ProgressOptions<MyOperationProgressEvents> {
 *  // define options here
 * }
 * ```
 */
export interface ProgressOptions<Event extends ProgressEvent = any> {
  onProgress?: (evt: Event) => void
}
