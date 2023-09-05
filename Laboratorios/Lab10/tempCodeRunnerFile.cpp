#include <iostream>
#include <algorithm>
#include <climits> // For INT_MAX

int partition(int A[], int l, int h)
{
    int pivot = A[l];
    int i = l;
    int j = h;

    do
    {
        do
        {
            i++;
        } while (A[i] > pivot);
        do
        {
            j--;
        } while (A[j] < pivot);

        if (i < j)
        {
            int temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    } while (i < j);

    int temp = A[l];
    A[l] = A[j];
    A[j] = temp;

    return j;
}

void QuickSort(int A[], int l, int h)
{
    int j;

    if (l < h)
    {
        j = partition(A, l, h);
        QuickSort(A, l, j);
        QuickSort(A, j + 1, h);
    }
}

void DynamicProgrammingAlgo(int C[], int M, int Cant, int coinsUsed[]) {
    int cambio[M + 1][Cant + 1];

    for (int c = 1; c <= Cant; c++) {
        cambio[0][c] = _INT_MAX_ - 1;
    }
    for (int m = 1; m <= M; m++) {
        cambio[m][0] = 0;
    }

    for (int m = 1; m <= M; m++) {
        for (int c = 1; c <= Cant; c++) {
            if (c < C[m - 1]) {
                cambio[m][c] = cambio[m - 1][c];
            } else {
                cambio[m][c] = std::min(cambio[m - 1][c], 1 + cambio[m][c - C[m - 1]]);
            }
        }
    }

    for (int i = M, j = Cant; i >= 1; i--) {
        while (j >= C[i - 1] && cambio[i][j] == 1 + cambio[i][j - C[i - 1]]) {
            coinsUsed[C[i - 1]]++;
            j -= C[i - 1];
        }
    }
}

void greedyAlgo(int C[], int n, int R)
{
    int finalList[n];
    int count = 0;
    for (int i = 0; i < n; i++)
    {
        if (R == 0)
        {
            finalList[i] = count;
        }
        else
        {
            while (R >= C[i])
            {
                R = R - C[i];
                count++;
            }
            finalList[i] = count;
            count = 0;
        }
    }
    for (int i = 0; i < n; i++)
    {
        std::cout << finalList[i] << " ";
    }
}

int main() {
    int n, P, Q, R;

    std::cout << "Number of denominations: ";
    std::cin >> n;

    int C[n];

    for (int i = 0; i < n; i++)
    {
        std::cout << "Value of Coin: ";
        std::cin >> C[i];
    }

    QuickSort(C, 0, n);
    
    std::cout << "Cost of product: ";
    std::cin >> P;

    std::cout << "Change given: " << std::endl;
    std::cin >> Q;

    R = Q - P;

    int *coinsUsed = new int[R - 1];

    for (int i = 0; i < R - 1; i++) {
        coinsUsed[i] = 0;
    }

    DynamicProgrammingAlgo(C, n, R, coinsUsed);

    std::cout << std::endl << "Dynamic Programming solution" << std::endl;

    for (int i = 0; i < n; i++) {
        std::cout << coinsUsed[C[i]] << " ";
    }

    std::cout << std::endl << std::endl << "Greedy Algorithm" << std::endl;

    greedyAlgo(C, n, R);

    delete[] coinsUsed;

    return 0;
}