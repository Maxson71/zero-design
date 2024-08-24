import 'jest-extended';

declare namespace jest {
    interface Matchers<R> {
        toBeInTheDocument(): R;
    }
}