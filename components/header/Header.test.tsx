import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/header/Header';
import '@testing-library/jest-dom';

jest.mock('@/components/theme/ThemeSwitcher', () => () => <div data-testid="theme-switcher" />);
jest.mock('react-icons/ci', () => ({
    CiSearch: (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} data-testid="search-icon" />,
}));

jest.mock('react-icons/pi', () => ({
    PiShoppingCartThin: (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} data-testid="cart-icon" />,
}));
jest.mock('@/components/logo/Logo', () => () => <div data-testid="logo" />);

describe('Header Component', () => {
    test('renders the Header with navigation links and icons', () => {
        render(<Header />);

        // Перевірка наявності логотипу
        const logo = screen.getByTestId('logo');
        expect(logo).toBeInTheDocument();

        // Перевірка наявності навігаційних лінків
        expect(screen.getByText('Landing')).toBeInTheDocument();
        expect(screen.getByText('Company')).toBeInTheDocument();
        expect(screen.getByText('CMS Pages')).toBeInTheDocument();
        expect(screen.getByText('Utility')).toBeInTheDocument();

        // Перевірка наявності кнопки покупки
        const buyNowButton = screen.getByText('$129 Buy Now');
        expect(buyNowButton).toBeInTheDocument();

        // Перевірка наявності компонента ThemeSwitcher
        const themeSwitcher = screen.getByTestId('theme-switcher');
        expect(themeSwitcher).toBeInTheDocument();

        // Перевірка наявності іконок пошуку та корзини
        const searchIcon = screen.getByTestId('search-icon');
        expect(searchIcon).toBeInTheDocument();

        const cartIcon = screen.getByTestId('cart-icon');
        expect(cartIcon).toBeInTheDocument();
    });
});
