import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/header/Header';
import '@testing-library/jest-dom';

jest.mock('@/components/theme/ThemeSwitcher', () => {
    const MockThemeSwitcher = () => <div data-testid="theme-switcher" />;
    MockThemeSwitcher.displayName = 'ThemeSwitcher';
    return MockThemeSwitcher;
});

jest.mock('react-icons/ci', () => {
    const MockCiSearch = (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} data-testid="search-icon" />;
    MockCiSearch.displayName = 'CiSearch';
    return {
        CiSearch: MockCiSearch,
    };
});

jest.mock('react-icons/pi', () => {
    const MockPiShoppingCartThin = (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} data-testid="cart-icon" />;
    MockPiShoppingCartThin.displayName = 'PiShoppingCartThin';
    return {
        PiShoppingCartThin: MockPiShoppingCartThin,
    };
});

jest.mock('@/components/logo/Logo', () => {
    const MockLogo = () => <div data-testid="logo" />;
    MockLogo.displayName = 'Logo';
    return MockLogo;
});
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
