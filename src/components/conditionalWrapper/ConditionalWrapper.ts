interface ConditionalWrapperProps<T> {
    condition: boolean;
    wrapper: (children: T) => JSX.Element;
    children: T;
}

export const ConditionalWrapper = <T>({
    condition,
    wrapper,
    children,
}: ConditionalWrapperProps<T>): JSX.Element => {
    return condition ? wrapper(children) : (children as JSX.Element);
};
