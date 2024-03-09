import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Primeiro comentário do teste',
            }
        });

        fireEvent.click(screen.getByTestId('comment-submit-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentário do teste',
            }
        });

        fireEvent.click(screen.getByTestId('comment-submit-button'));

        const commentElements = screen.getAllByTestId('comment-item');
        expect(commentElements).toHaveLength(2)
        expect(commentElements[0]).toHaveTextContent('Primeiro comentário do teste');
        expect(commentElements[1]).toHaveTextContent('Segundo comentário do teste');
    });
});

